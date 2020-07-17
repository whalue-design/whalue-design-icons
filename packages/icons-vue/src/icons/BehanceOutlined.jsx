// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import BehanceOutlinedSvg from '@whalue-design/icons-svg/lib/asn/BehanceOutlined';

export default {
  name: 'IconBehanceOutlined',
  displayName: 'BehanceOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BehanceOutlinedSvg } },
      children,
    ),
};