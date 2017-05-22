// Package metadata for Meteor.js web platform (https://www.meteor.com/)
// This file is defined within the Meteor documentation at
//
//   http://docs.meteor.com/#/full/packagejs
//
// and it is needed to define a Meteor package
'use strict';

Package.describe({
  name: 'nxcong:flow-routing',
  summary: 'UserAccounts package providing routes configuration capability via ostrio:flow-router-extra.',
  version: '1.14.3',
  git: 'https://github.com/cafe4it/flow-routing.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.4');

  api.use([
    'check',
    'ecmascript',
    'ostrio:flow-router-extra',
    'underscore',
    'useraccounts:core',
    'modules'
  ], ['client', 'server']);

  api.imply([
    'ostrio:flow-router-extra@3.1.1',
    'useraccounts:core@1.14.2',
  ], ['client', 'server']);

  api.use([
     'react@0.14.1_1',
     'kadira:blaze-layout@2.3.0',
     'kadira:react-layout@1.5.2',
     'gwendall:blaze-to-react@0.1.2'
  ], ['client', 'server'], { weak: true });

  api.addFiles([
    'lib/core.js',
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/client.js',
    'lib/client/templates_helpers/at_input.js',
  ], ['client']);
});
