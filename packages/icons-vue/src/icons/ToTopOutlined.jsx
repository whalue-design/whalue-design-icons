// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ToTopOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ToTopOutlined';

export default {
  name: 'IconToTopOutlined',
  displayName: 'ToTopOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ToTopOutlinedSvg } },
      children,
    ),
};