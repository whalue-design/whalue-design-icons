// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ArrowLeftOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ArrowLeftOutlined';

export default {
  name: 'IconArrowLeftOutlined',
  displayName: 'ArrowLeftOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ArrowLeftOutlinedSvg } },
      children,
    ),
};