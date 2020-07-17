// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ExperimentTwoToneSvg from '@whalue-design/icons-svg/lib/asn/ExperimentTwoTone';

export default {
  name: 'IconExperimentTwoTone',
  displayName: 'ExperimentTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ExperimentTwoToneSvg } },
      children,
    ),
};