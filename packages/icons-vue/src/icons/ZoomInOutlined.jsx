// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ZoomInOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ZoomInOutlined';

export default {
  name: 'IconZoomInOutlined',
  displayName: 'ZoomInOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ZoomInOutlinedSvg } },
      children,
    ),
};