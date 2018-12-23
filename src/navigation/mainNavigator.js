// @flow

import { createStackNavigator } from 'react-navigation';
import SettingsNavigator from '@gringo/navigation/settingsNavigator';
import Feed from '@gringo/feed';
import Broadcast from '@gringo/broadcast';
import BroadcastDirectMessage from '@gringo/broadcast/component/directMessage';
import BroadcastOnDemandService from '@gringo/broadcast/component/onDemandService';
import Browser from '@gringo/browser';
import Timeline from '@gringo/timeline';
import TimelinePinned from '@gringo/timeline/pinned';
import TimelineMap from '@gringo/timeline/map';
import Channels from '@gringo/channels';
import Channel from '@gringo/channels/channel';
import ChannelStore from '@gringo/channels/store';
import Account from '@gringo/account';
import AccountDelete from '@gringo/account/management/deleteAccount';
import AccountChangePhoneNumber from '@gringo/account/management/changePhoneNumber';
import AccountNewPhoneNumber from '@gringo/account/management/changePhoneNumber/newPhoneNumber';
import Profile from '@gringo/account/profile';
import ProfileSetup from '@gringo/account/profile/setup';
import ProfileStatusNew from '@gringo/account/profile/status/new';
import ProfileStatus from '@gringo/account/profile/status';
import ProfileName from '@gringo/account/profile/name';
import ProfileNameEdit from '@gringo/account/profile/name/edit';
import Billing from '@gringo/account/billing';
import BillingSetup from '@gringo/account/billing/setup';
import BillingAddress from '@gringo/account/billing/address';
import BillingGateway from '@gringo/account/billing/payments/gateway';
import BillingPayments from '@gringo/account/billing/payments';
import BillingTelephone from '@gringo/account/billing/telephone';
import BillingTelephoneEdit from '@gringo/account/billing/telephone/edit';
import AccountChannel from '@gringo/account/channel';
import AccountChannelActivity from '@gringo/account/channel/activity';
import AccountChannelBroadcasters from '@gringo/account/channel/broadcasters';
import AccountChannelManagement from '@gringo/account/channel/management';
import AccountChannelName from '@gringo/account/channel/management/name';
import AccountChannelBio from '@gringo/account/channel/bio';
import AccountChannelContactList from '@gringo/account/channel/broadcasters/contactList';
import SocialAccountsSetup from '@gringo/account/social/setup';
import SocialAccounts from '@gringo/account/social';
import Help from '@gringo/account/help';
import AppInfo from '@gringo/account/help/appInfo';
import ContactUs from '@gringo/account/help/contactUs';
import Backup from '@gringo/backup';
import Theme from '@gringo/styles/global';
import * as screenNames from './screens';

const { colors } = Theme;
const AppNavigator = createStackNavigator(
  {
    [screenNames.BACKUP]: {
      screen: Backup,
    },
    [screenNames.BILLING]: {
      screen: Billing,
    },
    [screenNames.BILLING_SETUP]: {
      screen: BillingSetup,
    },
    [screenNames.ADDRESS]: {
      screen: BillingAddress,
    },
    [screenNames.GATEWAY]: {
      screen: BillingGateway,
    },
    [screenNames.PAYMENTS]: {
      screen: BillingPayments,
    },
    [screenNames.TELEPHONE]: {
      screen: BillingTelephone,
    },
    [screenNames.TELEPHONE_EDIT]: {
      screen: BillingTelephoneEdit,
    },
    [screenNames.ACCOUNT_CHANNEL]: {
      screen: AccountChannel,
    },
    [screenNames.ACCOUNT_CHANNEL_ACTIVITY]: {
      screen: AccountChannelActivity,
    },
    [screenNames.ACCOUNT_CHANNEL_BIO]: {
      screen: AccountChannelBio,
    },
    [screenNames.ACCOUNT_CHANNEL_BROADCASTERS]: {
      screen: AccountChannelBroadcasters,
    },
    [screenNames.ACCOUNT_CHANNEL_MANAGEMENT]: {
      screen: AccountChannelManagement,
    },
    [screenNames.ACCOUNT_CHANNEL_NAME]: {
      screen: AccountChannelName,
    },
    [screenNames.ACCOUNT_CHANNEL_CONTACT_LIST]: {
      screen: AccountChannelContactList,
    },
    [screenNames.HELP]: {
      screen: Help,
    },
    [screenNames.APP_INFO]: {
      screen: AppInfo,
    },
    [screenNames.CONTACT_US]: {
      screen: ContactUs,
    },
    [screenNames.ACCOUNT]: {
      screen: Account,
    },
    [screenNames.ACCOUNT_CHANGE_NUMBER]: {
      screen: AccountChangePhoneNumber,
    },
    [screenNames.ACCOUNT_NEW_NUMBER]: {
      screen: AccountNewPhoneNumber,
    },
    [screenNames.ACCOUNT_DELETE]: {
      screen: AccountDelete,
    },
    [screenNames.PROFILE]: {
      screen: Profile,
    },
    [screenNames.PROFILE_SETUP]: {
      screen: ProfileSetup,
    },
    [screenNames.PROFILE_STATUS]: {
      screen: ProfileStatus,
    },
    [screenNames.PROFILE_NEW_STATUS]: {
      screen: ProfileStatusNew,
    },
    [screenNames.PROFILE_NAME]: {
      screen: ProfileName,
    },
    [screenNames.PROFILE_NAME_EDIT]: {
      screen: ProfileNameEdit,
    },
    [screenNames.SOCIAL_ACCOUNTS]: {
      screen: SocialAccounts,
    },
    [screenNames.SOCIAL_ACCOUNTS_SETUP]: {
      screen: SocialAccountsSetup,
    },
    [screenNames.TIMELINE]: {
      screen: Timeline,
    },
    [screenNames.TIMELINE_PINNED]: {
      screen: TimelinePinned,
    },
    [screenNames.TIMELINE_MAP]: {
      screen: TimelineMap,
    },
    [screenNames.CHANNELS]: {
      screen: Channels,
    },
    [screenNames.CHANNEL]: {
      screen: Channel,
    },
    [screenNames.CHANNEL_STORE]: {
      screen: ChannelStore,
    },
    [screenNames.BROADCAST]: {
      screen: Broadcast,
    },
    [screenNames.BROADCAST_DIRECT_MESSAGE]: {
      screen: BroadcastDirectMessage,
    },
    [screenNames.BROADCAST_ON_DEMAND_SERVICE]: {
      screen: BroadcastOnDemandService,
    },
    [screenNames.BROWSER]: {
      screen: Browser,
    },
    [screenNames.FEED]: {
      screen: Feed,
    },
    [screenNames.SETTINGS]: {
      screen: SettingsNavigator,
    },
  },
  {
    initialRouteName: screenNames.FEED,
    /* The header config from all app screens is now here */
    navigationOptions: {
      title: 'Gringo',
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.background,
      headerTitleStyle: {
        fontWeight: '600',
      },
    },
  }
);


export default AppNavigator;
