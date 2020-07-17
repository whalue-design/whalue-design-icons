// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ChromeOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ChromeOutlined';

export default {
  name: 'IconChromeOutlined',
  displayName: 'ChromeOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ChromeOutlinedSvg } },
      children,
    ),
};