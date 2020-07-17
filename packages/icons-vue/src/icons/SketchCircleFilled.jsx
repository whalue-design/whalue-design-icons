// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SketchCircleFilledSvg from '@whalue-design/icons-svg/lib/asn/SketchCircleFilled';

export default {
  name: 'IconSketchCircleFilled',
  displayName: 'SketchCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SketchCircleFilledSvg } },
      children,
    ),
};