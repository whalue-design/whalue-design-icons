// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ForwardOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ForwardOutlined';

export default {
  name: 'IconForwardOutlined',
  displayName: 'ForwardOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ForwardOutlinedSvg } },
      children,
    ),
};