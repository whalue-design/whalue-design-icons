// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import AccountBookFilledSvg from '@whalue-design/icons-svg/lib/asn/AccountBookFilled';

export default {
  name: 'IconAccountBookFilled',
  displayName: 'AccountBookFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AccountBookFilledSvg } },
      children,
    ),
};