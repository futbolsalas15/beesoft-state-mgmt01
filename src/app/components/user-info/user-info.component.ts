import { Component, OnInit } from '@angular/core';
import { UserFacade } from '../../store';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  public readonly name$ = this._userFacade.name$;

  constructor(private readonly _userFacade: UserFacade) {}

  ngOnInit() {}
}
