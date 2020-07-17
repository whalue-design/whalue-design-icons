// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ReadFilledSvg from '@whalue-design/icons-svg/lib/asn/ReadFilled';

export default {
  name: 'IconReadFilled',
  displayName: 'ReadFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ReadFilledSvg } },
      children,
    ),
};