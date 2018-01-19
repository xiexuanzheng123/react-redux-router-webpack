import { createStore, applyMiddleware } from 'redux';
import rootReducer from './src/reducers';
import reduxImmutableStoreInvariant from 'redux-immutable-state-invariant';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({

});
export default function configureStore (initialState) {
    const logger = createLogger ();
    return createStore (
        rootReducer,
        initialState,
        composeEnhancers (
            applyMiddleware (
                thunk,
                logger,
                reduxImmutableStoreInvariant ()
            )
        )
    )
}