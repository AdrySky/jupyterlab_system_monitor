import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab_system_monitor extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_system_monitor:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_system_monitor is activated!');
  }
};

export default extension;
