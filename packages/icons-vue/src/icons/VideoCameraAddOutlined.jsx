// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import VideoCameraAddOutlinedSvg from '@whalue-design/icons-svg/lib/asn/VideoCameraAddOutlined';

export default {
  name: 'IconVideoCameraAddOutlined',
  displayName: 'VideoCameraAddOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: VideoCameraAddOutlinedSvg } },
      children,
    ),
};