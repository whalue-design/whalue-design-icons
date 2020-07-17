// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import EllipsisOutlinedSvg from '@whalue-design/icons-svg/lib/asn/EllipsisOutlined';

export default {
  name: 'IconEllipsisOutlined',
  displayName: 'EllipsisOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: EllipsisOutlinedSvg } },
      children,
    ),
};