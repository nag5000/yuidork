import Ember from 'ember';

const {
  A,
  Component,
  computed,
} = Ember;

import eqMixin   from 'ember-element-query/mixin';
import layout    from '../templates/components/layout-default';

export default Component.extend(eqMixin, {

  // ----- Arguments -----
  owner:         null,
  repo:          null,
  versionName:   null,
  versionRecord: null,



  // ----- Overridden properties -----
  classNameBindings: [
    ':layoutDefault',
    'menuIsExpanded:-menuExpanded:-menuCollapsed',
  ],

  eqTransitionSelectors: [
    '.layoutDefault-menu',
    '.layoutDefault-content'
  ],

  layout,



  // ----- Overwritable properties -----
  menuIsExpanded:  true,
  closeMenuAction: null,



  // ----- Computed properties -----
  ownerUrl: computed('owner', function () {
    const owner = this.get('owner');
    return `https://github.com/${owner}`;
  }),

  repoUrl: computed('ownerUrl', 'repo', function () {
    const ownerUrl = this.get('ownerUrl');
    const repo     = this.get('repo');
    return `${ownerUrl}/${repo}`;
  }),

  versionUrl: computed('repoUrl', 'versionName', function () {
    const repoUrl     = this.get('repoUrl');
    const versionName = this.get('versionName');
    return `${repoUrl }/tree/${versionName}`;
  }),



  // ----- Actions -----
  actions: {
    toggleMenu () {
      this.toggleProperty('menuIsExpanded');
    },

    closeMenu (ignoreOnSmall) {
      if (ignoreOnSmall && A(this.get('eqSlicesFrom')).contains('l')) {
        return;
      }

      this.set('menuIsExpanded', false);
    }
  }


});
