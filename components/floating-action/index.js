Component({
  data: {
    open: false,
    movable: false
  },
  methods: {
    onToggle() {
      if (this.data.movable) {
        this.setData({ movable: false });
        return;
      }
      this.setData({ open: !this.data.open });
      this.triggerEvent('toggle', { open: !this.data.open });
    },
    onEnableMove() {
      this.setData({ movable: true, open: false });
    },
    onPostProject() {
      this.triggerEvent('navigate', { type: 'project' });
      this.setData({ open: false });
    },
    onPostJob() {
      this.triggerEvent('navigate', { type: 'job' });
      this.setData({ open: false });
    },
    onPostPost() {
      this.triggerEvent('navigate', { type: 'post' });
      this.setData({ open: false });
    }
  }
});
