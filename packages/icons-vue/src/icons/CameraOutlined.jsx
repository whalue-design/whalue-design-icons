// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CameraOutlinedSvg from '@whalue-design/icons-svg/lib/asn/CameraOutlined';

export default {
  name: 'IconCameraOutlined',
  displayName: 'CameraOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CameraOutlinedSvg } },
      children,
    ),
};