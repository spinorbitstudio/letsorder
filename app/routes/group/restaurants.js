import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    // var userID = this.get('session').content.userID;
    return this.store.find('group', params.id);
  },
  actions: {
    close: function() {
      window.$('.overlay').hide();
    }
  },
  renderTemplate: function() {
    this.render('group/restaurants');
    this.render('-modal', {
        outlet:'modal'
    });
    this.render('-timer', {
        outlet:'modalcontent'
    });
  }
});
