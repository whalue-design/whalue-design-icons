// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DragOutlinedSvg from '@whalue-design/icons-svg/lib/asn/DragOutlined';

export default {
  name: 'IconDragOutlined',
  displayName: 'DragOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DragOutlinedSvg } },
      children,
    ),
};