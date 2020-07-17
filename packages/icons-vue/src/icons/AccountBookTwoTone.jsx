// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import AccountBookTwoToneSvg from '@whalue-design/icons-svg/lib/asn/AccountBookTwoTone';

export default {
  name: 'IconAccountBookTwoTone',
  displayName: 'AccountBookTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AccountBookTwoToneSvg } },
      children,
    ),
};