import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewRef
} from '@angular/core';
import {AboutComponent} from "../about/about.component";
import {WorksComponent} from "../works/works.component";
import {SkillsComponent} from "../skills/skills.component";
import {ContactsComponent} from "../contacts/contacts.component";
import {LocaleService} from "../services/locale";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {TimeoutService} from "../services/timeout";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [
    trigger('start', [
      // ...
      state('begin', style({
        width: '0%',
      })),
      state('end', style({
        width: '100%',
      })),
      transition('begin => end', [
        animate('0.5s')
      ]),
      transition('end => begin', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class MainPageComponent implements AfterViewInit {
  selected = 0
  isVisible = false;
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;
  constructor(
    private factory: ComponentFactoryResolver,
    private locale: LocaleService,
    private delay: TimeoutService
  ) { }

  ngAfterViewInit(): void {
    this.render()
  }
  async render(){
    await this.locale.waitInit()
    let component = this.factory.resolveComponentFactory(AboutComponent);
    switch (this.selected){
      case 1:
        component = this.factory.resolveComponentFactory(WorksComponent);
        break;
      case 2:
        component = this.factory.resolveComponentFactory(SkillsComponent);
        break;
      case 3:
        component = this.factory.resolveComponentFactory(ContactsComponent);
        break;
    }
    this.container.clear()
    this.isVisible = false;
    await this.delay.timeout(500);
    this.isVisible = true;
    await this.delay.timeout(400);
    this.container.createComponent(component);
  }

  select(id: number){
    this.selected = id
    this.render()
  }

}
