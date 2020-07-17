// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import VideoCameraOutlinedSvg from '@whalue-design/icons-svg/lib/asn/VideoCameraOutlined';

export default {
  name: 'IconVideoCameraOutlined',
  displayName: 'VideoCameraOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: VideoCameraOutlinedSvg } },
      children,
    ),
};