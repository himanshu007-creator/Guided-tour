const tour = new Shepherd.Tour({
  defaultStepOptions: {
    classes: 'shadow-md bg-purple-dark',
    cancelIcon: {
      enabled: true
    },
    classes: 'class-1 class-2',
    scrollTo: { behavior: 'smooth', block: 'center' }
  }
});

tour.addStep({
  title: 'Welcome to the website',
  text: `lets show you around the town`,
  attachTo: {
    element: '.txt',
    on: 'top-start'
  },
  buttons: [
    {
      action() {
        return this.next();
      },
      text: 'Next'
    }
  ]
});
tour.addStep({
  title: 'Home menu',
  text: `Here is the Home menu, you can see your configurations here.`,
  attachTo: {
    element: '#home',
    on: 'bottom'
  },
  buttons: [
  {
      action() {
        return this.cancel();
      },
      classes: 'shepherd-button-warning',
      text: 'Cancel'
    },
  {
      action() {
        return this.back();
      },
      classes: 'shepherd-button-secondary',
      text: 'Back'
    },
    {
      action() {
        return this.next();
      },
      text: 'Next'
    }
  ]
});
tour.addStep({
  title: 'About ',
  text: `Here you can see information about the organisation`,
  attachTo: {
    element: '#about',
    on: 'bottom'
  },
  buttons: [
  {
      action() {
        return this.cancel();
      },
      classes: 'shepherd-button-warning',
      text: 'Cancel'
    },
  {
      action() {
        return this.back();
      },
      classes: 'shepherd-button-secondary',
      text: 'Back'
    },
    {
      action() {
        return this.next();
      },
      text: 'Next'
    }
  ]
});
tour.addStep({
  title: 'Projects ',
  text: `Here yoy can interesting projects being worked upon by us`,
  attachTo: {
    element: '#projects',
    on: 'bottom'
  },
  buttons: [
  {
      action() {
        return this.cancel();
      },
      classes: 'shepherd-button-warning',
      text: 'Cancel'
    },
  {
      action() {
        return this.back();
      },
      classes: 'shepherd-button-secondary',
      text: 'Back'
    },
    {
      action() {
        return this.next();
      },
      text: 'Next'
    }
  ]
});
tour.addStep({
  title: 'Contact us ',
  text: `Feel like talking? contact us!`,
  attachTo: {
    element: '#contact',
    on: 'bottom'
  },
  buttons: [
  {
      action() {
        return this.cancel();
      },
      classes: 'shepherd-button-warning',
      text: 'Cancel'
    },
  {
      action() {
        return this.back();
      },
      classes: 'shepherd-button-secondary',
      text: 'Back'
    },
    {
      action() {
        return this.next();
      },
      text: 'Next'
    }
  ]
});
tour.addStep({
  title: 'Settings',
  text: `Configure your setup`,
  attachTo: {
    element: '#settings',
    on: 'right'
  },
  buttons: [
  {
      action() {
        return this.cancel();
      },
      classes: 'shepherd-button-warning',
      text: 'Cancel'
    },
  {
      action() {
        return this.back();
      },
      classes: 'shepherd-button-secondary',
      text: 'Back'
    },
    {
      action() {
        return this.next();
      },
      text: 'Next'
    }
  ]
});
tour.addStep({
  title: 'Assistance',
  text: `Whenever you need any help, Press me😄`,
  attachTo: {
    element: '#help',
    on: 'bottom'
  },
  buttons: [ 
  {
      action() {
        return this.back();
      },
      classes: 'shepherd-button-secondary',
      text: 'Back'
    },
    {
      action() {
        return this.complete();
      },
      classes: 'shepherd-button-warning align-left',
      text: 'End'
    }
  ]
});

function abc(){
  tour.start();
  console.log('CLICKED')
}