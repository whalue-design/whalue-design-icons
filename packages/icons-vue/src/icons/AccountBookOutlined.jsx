// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import AccountBookOutlinedSvg from '@whalue-design/icons-svg/lib/asn/AccountBookOutlined';

export default {
  name: 'IconAccountBookOutlined',
  displayName: 'AccountBookOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AccountBookOutlinedSvg } },
      children,
    ),
};