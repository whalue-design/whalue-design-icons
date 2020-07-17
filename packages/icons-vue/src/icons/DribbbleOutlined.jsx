// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DribbbleOutlinedSvg from '@whalue-design/icons-svg/lib/asn/DribbbleOutlined';

export default {
  name: 'IconDribbbleOutlined',
  displayName: 'DribbbleOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DribbbleOutlinedSvg } },
      children,
    ),
};