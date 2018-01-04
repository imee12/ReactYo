'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');



module.exports = class extends Generator {


  // constructor(args, options) {
  //
  //   super(args, options);
  //
  //   // Make options available
  //   this.option('skip-welcome-message', {
  //     desc: 'Skip the welcome message',
  //     type: Boolean,
  //     defaults: false
  //   });
  //
  //
  //
  //   this.config.save();
  // }

  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to Imee's Practice ${chalk.red('generator-react')} generator`));

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What would you like to name your app ?',
        default: this.name,
      },

    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    // this.fs.copy(
    //   this.templatePath('dummyfile.html'),
    //   this.destinationPath('practicePath/dummyfile.html')
    // );
    this.fs.copyTpl(
      this.templatePath('./_package.json'),
      this.destinationPath('package.json'),
      {
        name: this.props.name,
      }
    );

    this.fs.copyTpl(
      this.templatePath('./_bower.json'),
      this.destinationPath('bower.json'),
      {
        name: this.props.name,
      }
    );
    this.fs.copy(
      this.templatePath('babelrc'),
      this.destinationPath('.babelrc')
    );
    this.fs.copy(
      this.templatePath('bowerrc'),
      this.destinationPath('.bowerrc')
    );

    this.fs.copy(
      this.templatePath('_webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );
    this.fs.copy(
      this.templatePath('_index.html'),
      this.destinationPath('index.html')
    );

    this.fs.copy(
      this.templatePath('_history/_configureHistory.js'),
      this.destinationPath('src/history/configureHistory.js')
    );

    this.fs.copy(
      this.templatePath('_index.js'),
      this.destinationPath('src/index.js')
    );

    this.fs.copy(
      this.templatePath('_store/_configureStore.js'),
      this.destinationPath('src/store/configureStore.js')
    );

    this.fs.copy(
<<<<<<< HEAD
      this.templatePath('_components/_App.jsx'),
      this.destinationPath('src/App.jsx')
=======
      this.templatePath('_App.jsx'),
      this.destinationPath('src/components/App.jsx'),
>>>>>>> 8172826a2b3392a19eb6c38be79a50dbd25e808c
    );

    this.fs.copy(
      this.templatePath('_reducers/_index.js'),
      this.destinationPath('src/reducers/index.js')
    );

  }

  initializing() {
   //  this.composeWith(require.resolve('../zap'));
    if(!this.options['skip-welcome-message']) {
     //this.log(require('yeoman-welcome'));
     this.log('Out of the box I include Webpack and some default React components.\n');
   }


    // this.composeWith(
    //   'practice:express',e
    //   { options: { my_opt: 'anystring' } },
    //   { local: require.resolve('./express') },
    // );
  }

  install() {
    this.installDependencies();
    // if(!this.options['skip-install']) {
    //   this.installDependencies({ bower: false });
    // }
  }
};
