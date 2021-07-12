/* completed the test by Jared Savino(JaredSaivno1@gmail.com) */
import { SideNavItem } from '@modules/navigation/models';
export { SideNavItem };

export class MockSideNavItem implements SideNavItem {
    text = 'TEST';
    link = 'TEST';
}
