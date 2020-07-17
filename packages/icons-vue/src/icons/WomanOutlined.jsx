// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import WomanOutlinedSvg from '@whalue-design/icons-svg/lib/asn/WomanOutlined';

export default {
  name: 'IconWomanOutlined',
  displayName: 'WomanOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: WomanOutlinedSvg } },
      children,
    ),
};