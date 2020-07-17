// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import StepBackwardFilledSvg from '@whalue-design/icons-svg/lib/asn/StepBackwardFilled';

export default {
  name: 'IconStepBackwardFilled',
  displayName: 'StepBackwardFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: StepBackwardFilledSvg } },
      children,
    ),
};