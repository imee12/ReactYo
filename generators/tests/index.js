'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {

  constructor(args, options) {

  super(args, options);

  // Make options available

  this.option('name', {
    desc: 'Use this name for test generator',
    type: String,
    defaults: "Component"
  });

  this.option('path', {
    desc: 'path for test begining from root/test',
    type: String,
  });

  this.option('component', {
    desc: 'Will generate test for a component',
    type: Boolean,
    defaults: true
  });

  this.option('action', {
    desc: 'Will generate test for an action',
    type: Boolean,
    defaults: false
  });

  this.option('reducer', {
    desc: 'Will generate test for a reducer',
    type: Boolean,
    defaults: false
  });


  this.config.save();
}

  prompting() {}

  writing() {

    const componentDestination = this.options.path
      ? `test/component/${this.options.path}/${this.options.name}.spec.js`
      : `test/component/${this.options.name}.spec.js`;

    const actionDestination = this.options.path
      ? `test/action/${this.options.path}/${this.options.name}.spec.js`
      : `test/action/${this.options.name}.spec.js`;

    this.fs.copyTpl(
      this.templatePath('_Component.js'),
      this.destinationPath(componentDestination),
      {
        name: this.options['name'],
      }
    );

    this.options.action ? this.fs.copyTpl(
      this.templatePath('_action.js'),
      this.destinationPath(actionDestination),
        {
          name: this.options['name'],
          path: actionDestination,
        }
      ) : null;
  };
};
