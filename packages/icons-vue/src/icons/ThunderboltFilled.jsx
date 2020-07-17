// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ThunderboltFilledSvg from '@whalue-design/icons-svg/lib/asn/ThunderboltFilled';

export default {
  name: 'IconThunderboltFilled',
  displayName: 'ThunderboltFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ThunderboltFilledSvg } },
      children,
    ),
};