import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ModalService} from './modal.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit {
  result: { title: string, value: any }[];

  constructor(private modalService: ModalService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.result = this.modalService.modalData;
  }

  toHome(): void {
    this.router.navigate(['']);
  }
}
