import assert from 'node:assert/strict';
import {
  bottomNavSlots,
  centerActionItems,
  getActiveNavId,
  isBottomNavScreen,
  mainNavItems,
} from './navigationModel';

assert.deepEqual(
  mainNavItems.map((item) => item.id),
  ['home', 'tribes', 'watch', 'more'],
  'main nav should only show the requested bottom tabs',
);

assert.deepEqual(
  mainNavItems.map((item) => item.label),
  ['Home', 'Tribes', 'Watch', 'Menu'],
  'discover should be replaced with menu in the bottom nav',
);

assert.deepEqual(
  bottomNavSlots,
  ['home', 'tribes', 'plus', 'watch', 'more'],
  'bottom nav should place plus in the same row between tribes and watch',
);

assert.equal(
  getActiveNavId('claim-new-record'),
  'discover',
  'record claiming should keep the discover area highlighted',
);

assert.ok(
  centerActionItems.length >= 6,
  'center plus should open multiple app feature shortcuts',
);

assert.ok(
  centerActionItems.some((item) => item.id === 'discover'),
  'center plus should include discover',
);

assert.ok(
  centerActionItems.some((item) => item.id === 'create-tribe'),
  'center plus should include tribe creation',
);

assert.ok(
  centerActionItems.some((item) => item.id === 'claim-new-record'),
  'center plus should include record claiming',
);

assert.equal(isBottomNavScreen('home'), true, 'home should show bottom nav');
assert.equal(isBottomNavScreen('tribes'), true, 'tribes should show bottom nav');
assert.equal(isBottomNavScreen('watch'), true, 'watch should show bottom nav');
assert.equal(isBottomNavScreen('more'), true, 'menu should show bottom nav');
assert.equal(isBottomNavScreen('settings'), false, 'settings should hide bottom nav');
assert.equal(isBottomNavScreen('profile'), false, 'profile should hide bottom nav');
assert.equal(isBottomNavScreen('discover'), false, 'discover should hide bottom nav');
assert.equal(isBottomNavScreen('claim-new-record'), false, 'subpages should hide bottom nav');
