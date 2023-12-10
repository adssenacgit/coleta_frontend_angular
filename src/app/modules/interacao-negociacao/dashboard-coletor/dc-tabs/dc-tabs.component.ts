import { Component } from '@angular/core';

@Component({
  selector: 'app-dc-tabs',
  templateUrl: './dc-tabs.component.html',
  styleUrls: ['./dc-tabs.component.css']
})
export class DcTabsComponent {
  activeTab: string = 'tab1';

  openTab(tabName: string) {
    this.activeTab = tabName;
  }

  isTabActive(tabName: string): boolean {
    return this.activeTab === tabName;
  }
}
