// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ExperimentOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ExperimentOutlined';

export default {
  name: 'IconExperimentOutlined',
  displayName: 'ExperimentOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ExperimentOutlinedSvg } },
      children,
    ),
};