'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {

  constructor(args, options) {

  super(args, options);

  // Make options available

  this.option('name', {
    desc: 'Use this name for component generator',
    type: String,
    defaults: "Component"
  });

  this.option('path', {
    desc: 'path for component begining with src/components',
    type: String
  });

  this.option('flux', {
    desc: 'Determines if corresponding container is generated for a component',
    type: Boolean
  });

  this.option('route', {
    desc: 'Determines if corresponding route is generated for container',
    type: Boolean
  });

  this.option('url', {
    desc: 'If route is generated, what should the path be',
    type: String,
    defaults: '/'
  });

  // this.log(this.options['name', 'flux', 'route', 'path']);
  this.log(this.options.flux);
  // this.option('skip-install');

  // Use our plain template as source
  // this.sourceRoot(baseRootPath);

  this.config.save();
}

  prompting() {
    this.log('prompting - zap');
  }

  writing() {
    this.log('writing - zap');

    const componentDestination = this.options.path
      ? `src/components/${this.options.path}/${this.options.name}.jsx`
      : `src/components/${this.options.name}.jsx`;
    
    this.fs.copyTpl(
      this.templatePath('_Component.jsx'),
      this.destinationPath(componentDestination),
      {
        name: this.options['name'],
      }
    );

    this.options.flux ? this.fs.copyTpl(
      this.templatePath('_Container.jsx'),
      this.destinationPath(`src/containers/${this.options['name']}Container.jsx`),
      {
        name: this.options['name'],
      }
    ) : null;

    this.options.flux && this.options.route ? this.fs.copyTpl(
      this.templatePath('_App.jsx'),
      this.destinationPath('src/components/App.jsx'),
      {
        name: this.options['name'],
        url: this.options['url'],
        flux: this.options['flux'],
      }
    ) : null;
  }
};
