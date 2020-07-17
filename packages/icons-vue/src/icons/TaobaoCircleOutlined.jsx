// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import TaobaoCircleOutlinedSvg from '@whalue-design/icons-svg/lib/asn/TaobaoCircleOutlined';

export default {
  name: 'IconTaobaoCircleOutlined',
  displayName: 'TaobaoCircleOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: TaobaoCircleOutlinedSvg } },
      children,
    ),
};