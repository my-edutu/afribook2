/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { feature } from 'topojson-client';
import { MapPin } from 'lucide-react';

interface City {
  name: string;
  lat: number;
  long: number;
  active?: boolean;
}

const CITIES: City[] = [
  { name: 'Lagos', lat: 6.5244, long: 3.3792, active: true },
  { name: 'Nairobi', lat: -1.2921, long: 36.8219 },
  { name: 'Accra', lat: 5.6037, long: -0.1870 },
  { name: 'Cape Town', lat: -33.9249, long: 18.4241 },
  { name: 'Cairo', lat: 30.0444, long: 31.2357 },
  { name: 'Dakar', lat: 14.7167, long: -17.4677 },
  { name: 'Addis Ababa', lat: 9.0333, long: 38.7500 },
];

export default function InteractiveMap() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCity, setSelectedCity] = useState<City | null>(CITIES[0]);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    svg.selectAll('*').remove(); // Clear previous

    const g = svg.append('g');

    // Zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 8])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });

    svg.call(zoom);

    // Mercator projection centered on Africa
    const projection = d3.geoMercator()
      .scale(width * 0.5)
      .center([20, 0])
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    // Load GeoJSON
    d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then((data: any) => {
      const countries = feature(data, data.objects.countries) as any;
      
      // Filter for Africa (Common country codes or just show everything and focus)
      // For simplicity and better visual, we'll draw all countries but center on Africa
      g.append('path')
        .datum({ type: 'Sphere' })
        .attr('class', 'sphere')
        .attr('d', path)
        .attr('fill', '#f1f5f9');

      g.selectAll('path.country')
        .data(countries.features)
        .enter()
        .append('path')
        .attr('class', 'country')
        .attr('d', path)
        .attr('fill', '#cbd5e1')
        .attr('stroke', '#fff')
        .attr('stroke-width', 0.5)
        .on('mouseover', function() {
          d3.select(this).attr('fill', '#94a3b8');
        })
        .on('mouseout', function() {
          d3.select(this).attr('fill', '#cbd5e1');
        });

      // Draw Connections (Lines between cities)
      const connections = [];
      for(let i = 0; i < CITIES.length - 1; i++) {
        connections.push({
          type: 'LineString',
          coordinates: [[CITIES[i].long, CITIES[i].lat], [CITIES[i+1].long, CITIES[i+1].lat]]
        });
      }

      g.selectAll('path.connection')
        .data(connections)
        .enter()
        .append('path')
        .attr('class', 'connection')
        .attr('d', (d: any) => path(d))
        .attr('fill', 'none')
        .attr('stroke', '#ff8c00')
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', '4,4')
        .attr('opacity', 0.6);

      // Draw Cities
      const points = g.selectAll('g.city')
        .data(CITIES)
        .enter()
        .append('g')
        .attr('class', 'city')
        .attr('transform', (d: any) => {
          const coords = projection([d.long, d.lat]);
          return coords ? `translate(${coords[0]}, ${coords[1]})` : '';
        })
        .style('cursor', 'pointer')
        .on('click', (event, d) => {
          setSelectedCity(d);
          // Center on city
          const coords = projection([d.long, d.lat]);
          if(coords) {
             svg.transition().duration(750).call(
              zoom.transform,
              d3.zoomIdentity.translate(width / 2, height / 2).scale(4).translate(-coords[0], -coords[1])
            );
          }
        });

      points.append('circle')
        .attr('r', 4)
        .attr('fill', (d: any) => d.name === selectedCity?.name ? '#ff8c00' : '#1e40af')
        .attr('stroke', '#fff')
        .attr('stroke-width', 2);

      points.append('text')
        .text((d: any) => d.name)
        .attr('dy', 15)
        .attr('text-anchor', 'middle')
        .attr('font-size', '8px')
        .attr('font-weight', 'bold')
        .attr('fill', '#334155');
    });

  }, [selectedCity]);

  return (
    <div ref={containerRef} className="relative w-full h-full bg-slate-50 overflow-hidden">
      <svg ref={svgRef} className="w-full h-full" />
      
      {/* City Detail Overlay */}
      {selectedCity && (
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-primary/20 shadow-lg animate-in fade-in slide-in-from-left-4">
          <div className="flex items-center gap-2 mb-1">
            <div className="bg-primary/10 p-1 rounded">
              <MapPin size={16} className="text-primary" />
            </div>
            <h4 className="font-bold text-sm text-slate-800">{selectedCity.name}</h4>
          </div>
          <p className="text-[10px] text-slate-500 font-medium tracking-tight">Active Hub • 14 Records Claimed</p>
        </div>
      )}

      {/* Map Controls */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        <button 
          onClick={() => {
             const svg = d3.select(svgRef.current);
             svg.transition().duration(750).call(d3.zoom<SVGSVGElement, unknown>().transform, d3.zoomIdentity);
          }}
          className="bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-md border border-slate-200 text-slate-600 active:scale-95 transition-all"
        >
          <div className="w-4 h-4 flex items-center justify-center font-bold">↺</div>
        </button>
      </div>
    </div>
  );
}
