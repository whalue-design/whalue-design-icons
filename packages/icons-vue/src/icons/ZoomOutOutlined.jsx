// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ZoomOutOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ZoomOutOutlined';

export default {
  name: 'IconZoomOutOutlined',
  displayName: 'ZoomOutOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ZoomOutOutlinedSvg } },
      children,
    ),
};