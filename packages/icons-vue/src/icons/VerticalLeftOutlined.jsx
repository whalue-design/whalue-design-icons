// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import VerticalLeftOutlinedSvg from '@whalue-design/icons-svg/lib/asn/VerticalLeftOutlined';

export default {
  name: 'IconVerticalLeftOutlined',
  displayName: 'VerticalLeftOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: VerticalLeftOutlinedSvg } },
      children,
    ),
};