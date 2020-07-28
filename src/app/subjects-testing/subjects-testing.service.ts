import {AsyncSubject, BehaviorSubject, ReplaySubject, Subject, Subscription} from 'rxjs';

export class SubjectsTestingService {

  subscription = new Subscription();

  subject = new Subject();
  behaviourSubject = new BehaviorSubject(0);
  replaySubject = new ReplaySubject();
  replaySubjectWithBuffer = new ReplaySubject(2);
  asyncSubject = new AsyncSubject();

  testSubject(subject, isSubscriptionBeforeNext, additionalText): void {

    console.log('\nTesting the output of ' + subject.constructor.name + additionalText
      + (isSubscriptionBeforeNext ? ' (subscription before next())' : ' (subscription after next())'));

    if (isSubscriptionBeforeNext) {
      this.subscription = this.subscribe(subject);
      this.sendNext(subject);
    } else {
      this.sendNext(subject);
      this.subscription = this.subscribe(subject);
    }
    this.subscription.unsubscribe();
  }

  subscribe(subject): Subscription {
    return subject.subscribe({
      next: (v) => console.log('observer: ' + v),
      error: (error) => console.log(error),
      complete: () => console.log('Completed')
    });
  }

  sendNext(subject): void {
    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);
    subject.complete();
  }

}
