// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SketchOutlinedSvg from '@whalue-design/icons-svg/lib/asn/SketchOutlined';

export default {
  name: 'IconSketchOutlined',
  displayName: 'SketchOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SketchOutlinedSvg } },
      children,
    ),
};