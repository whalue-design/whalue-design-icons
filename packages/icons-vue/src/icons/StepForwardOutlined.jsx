// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import StepForwardOutlinedSvg from '@whalue-design/icons-svg/lib/asn/StepForwardOutlined';

export default {
  name: 'IconStepForwardOutlined',
  displayName: 'StepForwardOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: StepForwardOutlinedSvg } },
      children,
    ),
};