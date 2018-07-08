import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { connect } from '../actions/popup';
import rootReducer from '../reducers/index';

import { POPUP_CONNECT } from '../actions/actionTypes';

const testState = {
  currentTab: '379:3108',
  '379:3108': {
    slots: {
      slotIds: [
        'y1wqplt1dro-jbviptu5',
        '7fdk7lm6pfb-jbviptuh',
        'd5vqplt13d5-jbvipd2v',
        'dngeplt4hfv-xsvidke3',
      ],
      'y1wqplt1dro-jbviptu5': {
        slotId: 'y1wqplt1dro-jbviptu5',
        div: 'ad_2',
        path: '/32173961/desktop/frontpage/listing',
        gptId: '32173961',
        name: 'listing',
        sizes: [
          [
            300,
            250,
          ],
          [
            300,
            600,
          ],
        ],
        divExists: true,
        refresh: 0,
        targeting: {
          keywords: [
            'a.interesting',
            'a.videos',
            'k.ready for',
            'k.dui',
            'a.pets',
            's.frontpage',
            's.brandlift.holdout_7',
            's.brandlift.holdout_4',
            'k.jedi',
            'a.gaming',
            'a.life_advice',
            's.loggedout',
            's.sfw',
            'k.us',
            's.brandlift.holdout_13',
            'k.kylo ren',
            'a.photography',
            'k.actual',
            'k.library',
            'a.humor',
            'a.animals',
          ],
          adblock: [
            'off',
          ],
          listing: [
            'listing',
          ],
          interests: [
            'interesting',
            'videos',
            'pets',
            'gaming',
            'life_advice',
            'photography',
            'humor',
            'animals',
          ],
          placement: [
            'atf',
          ],
          whitelist_status: [
            'all_ads',
          ],
          subreddit_screen: [],
          percentage: [
            '95',
          ],
          iaa: [],
          random_number: [
            '95',
          ],
          environment: [
            'production',
          ],
          nsfw: [],
          logged_in: [],
          has_used_mobile_app: [],
          full_url: [
            'https://www.reddit.com/',
          ],
          amznbid: [
            'igj6kg',
          ],
          amznp: [
            'e5ph4w',
          ],
          amzniid: [
            'It_nRb24bEYxtJFBE24Tl7EAAAFgr04B8gEAAA0zAYwXxEg',
          ],
          amznsz: [
            '300x250',
          ],
        },
      },
      '7fdk7lm6pfb-jbviptuh': {
        slotId: '7fdk7lm6pfb-jbviptuh',
        div: 'ad_6',
        path: '/32173961/desktop/frontpage/listing',
        gptId: '32173961',
        name: 'listing',
        sizes: [
          [
            300,
            250,
          ],
        ],
        divExists: true,
        refresh: 0,
        targeting: {
          keywords: [
            'a.interesting',
            'a.videos',
            'k.ready for',
            'k.dui',
            'a.pets',
            's.frontpage',
            's.brandlift.holdout_7',
            's.brandlift.holdout_4',
            'k.jedi',
            'a.gaming',
            'a.life_advice',
            's.loggedout',
            's.sfw',
            'k.us',
            's.brandlift.holdout_13',
            'k.kylo ren',
            'a.photography',
            'k.actual',
            'k.library',
            'a.humor',
            'a.animals',
          ],
          adblock: [
            'off',
          ],
          listing: [
            'listing',
          ],
          interests: [
            'interesting',
            'videos',
            'pets',
            'gaming',
            'life_advice',
            'photography',
            'humor',
            'animals',
          ],
          placement: [
            'btf',
          ],
          whitelist_status: [
            'all_ads',
          ],
          subreddit_screen: [],
          percentage: [
            '45',
          ],
          iaa: [],
          random_number: [
            '45',
          ],
          environment: [
            'production',
          ],
          nsfw: [],
          logged_in: [],
          has_used_mobile_app: [],
          full_url: [
            'https://www.reddit.com/',
          ],
          amznbid: [
            '1quq7sw',
          ],
          amznp: [
            'e5ph4w',
          ],
          amzniid: [
            'IpLkdGZjnUFUm3NL2R4_PTAAAAFgr04B8gEAAA0zAcgkbYY',
          ],
          amznsz: [
            '300x250',
          ],
        },
      },
      'd5vqplt13d5-jbvipd2v': {
        slotId: 'd5vqplt13d5-jbvipd2v',
        div: 'ad_3',
        path: '/32173961/desktop/frontpage/listing',
        gptId: '32173961',
        name: 'listing',
        sizes: [
          [
            300,
            250,
          ],
          [
            300,
            600,
          ],
        ],
        divExists: false,
        refresh: 0,
        targeting: {
          keywords: [
            'a.interesting',
            'a.videos',
            'k.ready for',
            'k.dui',
            'a.pets',
            's.frontpage',
            's.brandlift.holdout_7',
            's.brandlift.holdout_4',
            'k.jedi',
            'a.gaming',
            'a.life_advice',
            's.loggedout',
            's.sfw',
            'k.us',
            's.brandlift.holdout_13',
            'k.kylo ren',
            'a.photography',
            'k.actual',
            'k.library',
            'a.humor',
            'a.animals',
          ],
          adblock: [
            'off',
          ],
          listing: [
            'listing',
          ],
          interests: [
            'interesting',
            'videos',
            'pets',
            'gaming',
            'life_advice',
            'photography',
            'humor',
            'animals',
          ],
          placement: [
            'atf',
          ],
          whitelist_status: [
            'all_ads',
          ],
          subreddit_screen: [],
          percentage: [
            '95',
          ],
          iaa: [],
          random_number: [
            '95',
          ],
          environment: [
            'production',
          ],
          nsfw: [],
          logged_in: [],
          has_used_mobile_app: [],
          full_url: [
            'https://www.reddit.com/',
          ],
          amznbid: [
            'igj6kg',
          ],
          amznp: [
            'e5ph4w',
          ],
          amzniid: [
            'It_nRb24bEYxtJFBE24Tl7EAAAFgr04B8gEAAA0zAYwXxEg',
          ],
          amznsz: [
            '300x250',
          ],
        },
      },
      'dngeplt4hfv-xsvidke3': {
        slotId: 'dngeplt4hfv-xsvidke3',
        div: 'ad_2',
        path: '/32173961/desktop/frontpage/listing',
        gptId: '32173961',
        name: 'listing',
        sizes: [
          [
            300,
            250,
          ],
          [
            300,
            600,
          ],
        ],
        divExists: true,
        refresh: 0,
        targeting: {
          keywords: [
            'a.interesting',
            'a.videos',
            'k.ready for',
            'k.dui',
            'a.pets',
            's.frontpage',
            's.brandlift.holdout_7',
            's.brandlift.holdout_4',
            'k.jedi',
            'a.gaming',
            'a.life_advice',
            's.loggedout',
            's.sfw',
            'k.us',
            's.brandlift.holdout_13',
            'k.kylo ren',
            'a.photography',
            'k.actual',
            'k.library',
            'a.humor',
            'a.animals',
          ],
          adblock: [
            'off',
          ],
          listing: [
            'listing',
          ],
          interests: [
            'interesting',
            'videos',
            'pets',
            'gaming',
            'life_advice',
            'photography',
            'humor',
            'animals',
          ],
          placement: [
            'atf',
          ],
          whitelist_status: [
            'all_ads',
          ],
          subreddit_screen: [],
          percentage: [
            '95',
          ],
          iaa: [],
          random_number: [
            '95',
          ],
          environment: [
            'production',
          ],
          nsfw: [],
          logged_in: [],
          has_used_mobile_app: [],
          full_url: [
            'https://www.reddit.com/',
          ],
          amznbid: [
            'igj6kg',
          ],
          amznp: [
            'e5ph4w',
          ],
          amzniid: [
            'It_nRb24bEYxtJFBE24Tl7EAAAFgr04B8gEAAA0zAYwXxEg',
          ],
          amznsz: [
            '300x250',
          ],
        },
      },
    },
    detached: false,
  },
};

const logger = createLogger({ collapsed: true });
const store = createStore(rootReducer, applyMiddleware(logger));


// const port = chrome.runtime.connect();
// port.onMessage.addListener(msg => {
//   switch(msg.type) {
//     case POPUP_CONNECT:
//       store.dispatch(connect(msg.tab));
//     break;
//   };
// });

store.dispatch(connect(testState));

window.getState = store.getState;

export default store;
