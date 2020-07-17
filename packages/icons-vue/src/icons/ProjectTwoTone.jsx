// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ProjectTwoToneSvg from '@whalue-design/icons-svg/lib/asn/ProjectTwoTone';

export default {
  name: 'IconProjectTwoTone',
  displayName: 'ProjectTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ProjectTwoToneSvg } },
      children,
    ),
};