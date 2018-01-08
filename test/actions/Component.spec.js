import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { expect } from 'chai';

import * as actions from '../../src/actions/Component';

const mockStore = configureMockStore([thunk]);
