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

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements AfterViewInit {
  selected = 0
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;
  constructor(
    private factory: ComponentFactoryResolver
  ) { }

  ngAfterViewInit(): void {
    this.render()
  }
  render(){
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
    this.container.createComponent(component);
  }

  select(id: number){
    console.log(id)
    this.selected = id
    this.render()
  }

}