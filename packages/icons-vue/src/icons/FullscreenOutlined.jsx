// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FullscreenOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FullscreenOutlined';

export default {
  name: 'IconFullscreenOutlined',
  displayName: 'FullscreenOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FullscreenOutlinedSvg } },
      children,
    ),
};