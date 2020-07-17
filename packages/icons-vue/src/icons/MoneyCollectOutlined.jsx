// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import MoneyCollectOutlinedSvg from '@whalue-design/icons-svg/lib/asn/MoneyCollectOutlined';

export default {
  name: 'IconMoneyCollectOutlined',
  displayName: 'MoneyCollectOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MoneyCollectOutlinedSvg } },
      children,
    ),
};