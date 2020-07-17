// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import TaobaoOutlinedSvg from '@whalue-design/icons-svg/lib/asn/TaobaoOutlined';

export default {
  name: 'IconTaobaoOutlined',
  displayName: 'TaobaoOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: TaobaoOutlinedSvg } },
      children,
    ),
};